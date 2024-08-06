import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Pressable, Image, ScrollView } from 'react-native';
import styles from './styles';
import * as Notifications from 'expo-notifications';

export default function LocalNotifications() {
    const [reminder, setReminder] = useState(false);
    useEffect(() => {
        const checkNotificationStatus = async () => {
            const { status } = await Notifications.getPermissionsAsync();
            setReminder(status === 'granted');
        };
        checkNotificationStatus();
    }, []);

    const handleReminderPress = async () => {
        if (!reminder) {
            await requestNotificationPermissions();
        } else {
            await Notifications.cancelAllScheduledNotificationsAsync();
            setReminder(false);
        }
    };

    const requestNotificationPermissions = async () => {
        try {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== 'granted') {
                console.log('Notification permissions not granted');
                return;
            }
            await scheduleNotification();
            setReminder(true);
        } catch (error) {
            console.log('Error requesting permissions:', error);
        }
    };
    
    const scheduleNotification = async () => {
        await Notifications.cancelAllScheduledNotificationsAsync();
        
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Prize Reminder',
                body: 'Remember to add some prizes',
            },
            trigger: {
                seconds: 5, 
                repeats: true,
            },
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.aOne}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.image}
                />
                <View style={styles.sBig}>
                    <Text style={styles.aTwo}>Notifications:</Text>
                    <Text style={styles.aThree}>
                        Send me a reminder to add some gifts:
                    </Text>

                    <View style={styles.sChange.container}>
                        <Switch
                            value={reminder}
                            onValueChange={handleReminderPress}
                        />
                        <Pressable onPress={handleReminderPress}>
                            <Text style={styles.sChange.label}>
                                {reminder ? 'Stop Daily Reminder' : 'Start Daily Reminder'}
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.aHuge.container}>
                        <Text style={styles.aHuge.title}>
                            Scheduled Notifications: {reminder ? 1 : 0}
                        </Text>
                        <Text style={styles.aHuge.text}>
                            {reminder ? 'Prize Reminder' : 'None'}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
