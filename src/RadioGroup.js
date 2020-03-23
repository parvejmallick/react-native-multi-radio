import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";

export default RadioGroup = props => {
  const { name, options, textLeft = true, viewStyle, radioContainer, radioText, radioDotOutline, radioDot, size = 22, color = '#1976D2' } = props;

  let iniVal = props.value ? props.value : props.options[0].value ? props.options[0].value : props.options[0];
  //console.log( iniVal );

  const [selected, setSelected] = useState( iniVal );
  const selectOption = e => {
    console.log(e.value);
    let val = e.value ? e.value : e;
    setSelected(val);
    let r;
    if(name){
      r = { key : name, value : val }
    }else{
      r =  { value : val } ;
    }
    
    props.onChange(r);
  };

  console.log(selected);
  return (
      <View style={[viewStyle, {display: "flex"}]}>
        {options.map((opt, index) => (
          <TouchableOpacity style={[styles.radioContainer, radioContainer ]} key={index} onPress={() => selectOption(opt)} >
            {textLeft &&
              <Text style={[styles.radioText, radioText ]}>{opt.label ? opt.label : opt}</Text>
            }
            
            <TouchableOpacity onPress={() => selectOption(opt)} style={[ styles.radioDotOutline, radioDotOutline, {height: size, width: size, borderColor: color} ]}>
              {(opt.value == selected || opt == selected) ?
                <View style={[styles.radioDot, {height: size-10, width: size-10, backgroundColor: color}, radioDot ]} />
              : null}
            </TouchableOpacity>

            {!textLeft &&
              <Text style={[styles.radioText, radioText ]}>{opt.label ? opt.label : opt}</Text>
            }
          </TouchableOpacity>
        ))}
      </View>
  );
};