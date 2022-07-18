import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const VoteAverage = ({ voteAverage }: { voteAverage: number }) => {
  const voteAveragePorcent = Math.round(voteAverage * 10);
  return (
    <View
      style={[
        styles.contentvoteAverage,
        voteAveragePorcent < 50 && styles.contentvoteAverage50,
        voteAveragePorcent >= 50 && styles.contentvoteAverage60,
        voteAveragePorcent >= 70 && styles.contentvoteAverage70,
      ]}>
      <Text
        style={[
          styles.voteAverage,
          voteAveragePorcent < 50 && styles.voteAverage50,
          voteAveragePorcent >= 50 && styles.voteAverage60,
          voteAveragePorcent >= 70 && styles.voteAverage70,
        ]}>
        {`${voteAveragePorcent} `}%
      </Text>
    </View>
  );
};

export default VoteAverage;
