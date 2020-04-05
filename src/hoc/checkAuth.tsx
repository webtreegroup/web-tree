import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from 'redux/types';

export const checkAuth = (Component: React.ComponentType) => {

  const WrapperContainer = (props: any) => (
    <>
      {
        props.isAuth
          ? (<Component { ...props } />)
          : (<div>nah</div>)
      } 
    </>
  );

  const mapStateToProps = (state: IRootState) => ({
    isAuth: state.userAuth.isAuth
  });

  return connect(mapStateToProps)(WrapperContainer);
}
