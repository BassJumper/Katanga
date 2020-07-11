import React from 'react';
import { SafeAreaView } from 'react-native';
import useAuthContext from "./hooks/useAuthContext";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

interface IProps {
    username: string,
    password: string,
    showFullLogin: boolean
}

export default function Login(props : IProps) {
    const {state,login,setUsername,setPassword} = useAuthContext();
   
    if (props.showFullLogin) {
        return (
            <SafeAreaView>
               <Input
                placeholder='BASIC INPUT'
                />

                <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />

                <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    />
                }
                />

                <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                />
            </View>
        )
    }
}

