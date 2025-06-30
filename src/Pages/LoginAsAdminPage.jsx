import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import LogInComponent from "../components/Log-In forms/LogInComponent";

export const LoginAsAdminPage = () => {
  return (
    <div>
      <HeaderComponent />

      <LogInComponent />

      <FooterComponent />
    </div>
  );
};
