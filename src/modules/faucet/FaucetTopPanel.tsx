import { Trans } from '@lingui/macro';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import { Link } from 'src/components/primitives/Link';
import { PageTitle } from 'src/components/TopInfoPanel/PageTitle';
import { useRootStore } from 'src/store/root';

import { TopInfoPanel } from '../../components/TopInfoPanel/TopInfoPanel';

export const FaucetTopPanel = () => {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down('md'));
  const xsm = useMediaQuery(breakpoints.down('xsm'));
  const currentMarketData = useRootStore((store) => store.currentMarketData);
  return (
    <TopInfoPanel
      pageTitle={<></>}
      titleComponent={
        <Box>
          <PageTitle
            pageTitle={<Trans>{currentMarketData.marketTitle} Faucet</Trans>}
            withMarketSwitcher={true}
          />
          <Box sx={{ width: md ? (xsm ? '320px' : '540px') : '860px' }}>
            <Typography variant="description" color="#FFFFFF">
              <Trans>
                With testnet Faucet you can get free assets to test the Taralend Protocol. Make sure
                to switch your wallet provider to the appropriate testnet network, select desired
                asset, and click ‘Faucet’ to get tokens transferred to your wallet. The assets on a
                testnet are not “real,” meaning they have no monetary value. To get test TARA click{' '}
                <Link
                  href="https://testnet.explorer.taraxa.io/faucet"
                  sx={{ textDecoration: 'underline' }}
                >
                  here
                </Link>
              </Trans>
            </Typography>
          </Box>
        </Box>
      }
    />
  );
};
