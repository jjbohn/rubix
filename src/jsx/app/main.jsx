'use strict';

import './preloader';

import routes from './routes';
import router from '../../global/router';
import Pace from '../../global/pace';

Pace.once('hide', () => {
  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
});

module.exports = router(routes);
