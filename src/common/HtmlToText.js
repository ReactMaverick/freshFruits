import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

const HtmlToText = ({ htmlContent }) => {
    return (
      
            <HTMLView
                value={htmlContent}
                // stylesheet={styles}
            />
 
    );
};

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },
//     p: {
//         fontSize: 16,
//     },
//     b: {
//         fontWeight: 'bold',
//     },
//     i: {
//         fontStyle: 'italic',
//     },
// });

export default HtmlToText;
