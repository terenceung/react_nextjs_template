import React, { useState } from 'react';
import BaseLayout from '../../components/baseLayout';
import { withTranslation } from '../../i18n';



function Global({t}) {
  return (
    <BaseLayout title={'network'}>
      <div>Network</div>
    </BaseLayout>
  )
}

export default withTranslation()(Global);
