import { ChevronRightIcon } from '@heroicons/react/solid';
import { Trans } from '@lingui/macro';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, ROUTES } from 'src/components/primitives/Link';
import { useRootStore } from 'src/store/root';
import { CustomMarket, marketsData } from 'src/ui-config/marketsConfig';

export const GhoDiscountProgram = () => {
  const { breakpoints } = useTheme();
  const downToXsm = useMediaQuery(breakpoints.down('xsm'));
  const currentMarket = useRootStore((store) => store.currentMarket);

  const ghoTokenAddress = marketsData[
    CustomMarket.proto_mainnet_v3
  ].addresses.GHO_TOKEN_ADDRESS?.toLowerCase() as string;

  return (
    <Box
      sx={{
        overflow: 'hidden',
        height: {
          xs: 132,
          xsm: 124,
        },
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '100%',
          marginTop: 'auto',
          p: 4,
          borderRadius: {
            xs: 0,
            xsm: 4,
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            xs: 'flex-start',
            // xsm: 'center',
          },
          height: {
            xs: 120,
            xsm: 104,
          },
          backgroundColor: '#9C93B338',
          position: 'relative',
        }}
      >
        <Box display="flex" flexDirection="column" alignItems={['flex-start']} gap={3}>
          <Typography
            variant="subheader1"
            color="text.primary"
            width={['221px', '400px']}
            textAlign={['left']}
          >
            {downToXsm ? (
              <Trans>stkAAVE holders get a discount on GHO borrow rate</Trans>
            ) : (
              <Trans>Holders of stkAAVE receive a discount on the GHO borrowing rate</Trans>
            )}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            href={ROUTES.reserveOverview(ghoTokenAddress, currentMarket)}
            size={downToXsm ? 'medium' : 'small'}
            sx={{
              alignItems: 'center',
              display: 'flex',
              gap: [2, 1],
            }}
          >
            <Trans>{downToXsm ? 'View details' : 'VIEW DETAILS'}</Trans>
            <ChevronRightIcon width={downToXsm ? 20 : 12} height={downToXsm ? 20 : 12} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
