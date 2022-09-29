import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { PlayerCharacterContextProvider } from "../context/player-character-context";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
 Component,
 emotionCache = clientSideEmotionCache,
 pageProps,
}: any) {
 return (
   <CacheProvider value={emotionCache}>
     <ThemeProvider theme={theme}>
      <PlayerCharacterContextProvider>
       <Component {...pageProps} />
       </PlayerCharacterContextProvider>
     </ThemeProvider>
   </CacheProvider>
 );
}

export default MyApp;