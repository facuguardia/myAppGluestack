import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, SafeAreaView } from "@gluestack-ui/themed";

import Home from "./src/screens/Home";
import Alert from "./src/components/Alert";
import CreditCard from "./src/components/CreditCard";
import TextTitle from "./src/components/TextTitle";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView flex={1}>
        <TextTitle />
        <Home />
        <Alert />
        <CreditCard />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
