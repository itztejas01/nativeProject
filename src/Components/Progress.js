import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import ProgressBar from './Common/ProgressBar'

export class Progress extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                <ProgressBar />
                <ProgressBar />
                <ProgressBar />
                <ProgressBar />
                </ScrollView>
            </View>
        )
    }
}

export default Progress
