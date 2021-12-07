import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Config from 'react-native-config';

import { Typography } from '@components';

const Home = () => (
  <SafeAreaView>
    <Typography>
      {Config.APP_TITLE}
    </Typography>
    <Typography>
      Test
    </Typography>
  </SafeAreaView>
);

export default Home;
