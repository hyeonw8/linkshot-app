import { supabase } from "@/lib/supabase/client";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { useState } from "react";

export const useGoogleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();

      const res: any = await GoogleSignin.signIn();
      const idToken = res?.data?.idToken ?? res?.idToken ?? res?.user?.idToken;

      if (!idToken) throw new Error("No idToken");

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: idToken,
      });

      if (error) throw error;
    } catch (e: any) {
      if (e?.code === statusCodes.SIGN_IN_CANCELLED) return;
      if (e?.code === statusCodes.IN_PROGRESS) return;
      if (e?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) return;

      console.error("[GOOGLE LOGIN ERROR]", e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
