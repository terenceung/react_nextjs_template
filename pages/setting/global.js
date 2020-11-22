import React, { useState } from 'react';
import BaseLayout from '../../components/baseLayout';
import { withTranslation } from '../../i18n';

const breadcrumbs = [
  {name: 'setting'},
  {name: 'global'},
];

function Global({t}) {
  return (
    <BaseLayout title={'global'} breadcrumbs={breadcrumbs}>
      <div>Global</div>
    </BaseLayout>
  )
}

export default withTranslation()(Global);
