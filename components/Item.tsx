import React, { FC } from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';

interface ItemProps {
  image: any;
  url: any;
}

interface PlaybackStatus {
  androidImplementation: string;
  didJustFinish: boolean;
  durationMillis: number;
  isBuffering: boolean;
  isLoaded: boolean;
  isLooping: boolean;
  isMuted: boolean;
  isPlaying: boolean;
  playableDurationMillis: number;
  positionMillis: number;
  progressUpdateIntervalMillis: number;
  rate: number;
  shouldCorrectPitch: boolean;
  shouldPlay: boolean;
  uri: string;
  volume: number;
}

const Item: FC<ItemProps> = ({ image, url }) => {
  const playSoundHandler = async (source: number) => {
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync(source);
      await soundObject.playAsync().then((playbackStatus: PlaybackStatus) => {
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={() => playSoundHandler(url)}>
      <View style={styles.image__container}>
        <Image style={styles.image} source={image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image__container: {
    elevation: 15,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    margin: 16,
    height: 128,
    width: 128,
  },
});

export default Item;
