/**
 * Tabbar Icon
 *
    <TabIcon icon={'search'} selected={false} />
 *
 */
import React, { PropTypes } from 'react';
import {View, Text} from 'react-native'

import { Icon } from 'react-native-elements';

/* Component ==================================================================== */
const IconText = ({ icon, selected,title }) => (
  <View style={[{
    justifyContent:'center',
    alignItems:'center'
  }]}>
    <Icon
      name={icon}
      size={26}
      color={selected ? '#108EE9' : '#999999'}
      type='ionicon'
    />
    <Text style={[{
        color:selected ? '#108EE9' : '#999999'
    }]}>{title}</Text>
  </View>
);

IconText.propTypes = { icon: PropTypes.string.isRequired, selected: PropTypes.bool,title: PropTypes.string.isRequired};
IconText.defaultProps = { icon: 'search', selected: false ,title:'搜索'};

/* Export Component ==================================================================== */
export default IconText;
