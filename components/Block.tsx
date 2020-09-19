import React from 'react'
import { View } from 'react-native'

interface BlockProps { }

export const Block: React.FC<BlockProps> = ({children}) => {
    return (
        <View>
            {children}
        </View>
    );
}