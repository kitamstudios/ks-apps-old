import * as React from 'react';
import * as MatCore from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchRequest } from '../application/store/actions';
import { ApplicationState, AppSettings } from '../application/store/contracts';
import { Footer, Header } from '../../components/layouts';
import LoadingSpinner from '../../components/loadingSpinner';

interface PropsFromState {
  loading: boolean;
  data: AppSettings;
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Landing = ({ loading, data }: AllProps) => {
  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <Header environmentName={data.DeploymentEnvironmentName} />
          <MatCore.Grid style={{ padding: 24 }}>
            <MatCore.Box textAlign="center" fontSize="h4.fontSize">
              Welcome to the Digital Pali Reader {data.DeploymentReleaseNumber}
            </MatCore.Box>

            <MatCore.Box textAlign="center">To start, simply choose a set, book and section in the sidebar.</MatCore.Box>

            <MatCore.Box textAlign="center">For detailed instructions, click here for the help page.</MatCore.Box>

            <MatCore.Box textAlign="center">For information on updates, visit the project site.</MatCore.Box>

            <MatCore.Box textAlign="center">If you have questions or feedback, please contact me at yuttadhammo@gmail.com.</MatCore.Box>
          </MatCore.Grid>
          <Footer deploymentTimestamp={data.DeploymentCreatedTimestamp} releaseNumber={data.DeploymentReleaseNumber} />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ appSettings }: ApplicationState) => ({
  loading: appSettings.loading,
  errors: appSettings.errors,
  data: appSettings.data,
});

const mapDispatchToProps = {
  fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
