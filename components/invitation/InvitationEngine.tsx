import WelcomeScreen from "./welcome/welcomeScreen";

type InvitationEngineProps = {
  guest?: any;
  wedding: {
    groomName: string;
    brideName: string;
    weddingDate?: string;
  };
};

export default function InvitationEngine({
  wedding,
  guest,
}: InvitationEngineProps) {
  return (
    <WelcomeScreen
      groomName={wedding.groomName}
      brideName={wedding.brideName}
      weddingDate={wedding.weddingDate}
    />
  );
}
