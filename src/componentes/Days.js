import { View, Text, StyleSheet, Image } from "react-native-web";

export function Days() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Next 7 Days</Text>
            
            <View style={styles.content}>
              <Image style= {{height:40, width:40}}
                source={require('../../assets/sol.png')} />
              <Text style={styles.lineN}>Monday, </Text>
              <Text style={styles.lineD}>3 Oct</Text>
              <Text style={styles.temp}>
                <Text style={styles.lineTN}>32 </Text>
                <Text style={styles.lineTM}>/ 31°</Text>
              </Text>
            </View>

            <View style={styles.content}>
              <Image style= {{height:40, width:40}}
                source={require('../../assets/chovendoBranca.png')} />
              <Text style={styles.lineN}>Tuesday, </Text>
              <Text style={styles.lineD}>4 Oct</Text>
              <Text style={styles.temp}>
                <Text style={styles.lineTN}>22 </Text>
                <Text style={styles.lineTM}>/ 23°</Text>
              </Text>
            </View>

            <View style={styles.content}>
              <Image style= {{height:40, width:40}}
                source={require('../../assets/sol.png')} />
              <Text style={styles.lineN}>Wednesday, </Text>
              <Text style={styles.lineD}>5 Oct</Text>
              <Text style={styles.temp}>
                <Text style={styles.lineTN}>30 </Text>
                <Text style={styles.lineTM}>/ 31°</Text>
              </Text>
            </View>

            <View style={styles.content}>
              <Image style= {{height:40, width:40}}
                source={require('../../assets/nuvem.png')} />                
              <Text style={styles.lineN}>Thursday, </Text>
              <Text style={styles.lineD}>6 Oct</Text>
              <Text style={styles.temp}>
                <Text style={styles.lineTN}>24 </Text>
                <Text style={styles.lineTM}>/ 26</Text>
              </Text>
            </View>
            
            <View style={styles.content}>
              <Image style= {{height:40, width:40}}
                source={require('../../assets/chovendo.png')} />
              <Text style={styles.lineN}>Friday, </Text>
              <Text style={styles.lineD}>7 Oct</Text>
              <Text style={styles.temp}>
                <Text style={styles.lineTN}>26 </Text>
                <Text style={styles.lineTM}>/ 27°</Text>
              </Text>
            </View>

            <View style={styles.content}>
              <Image style= {{height:40, width:40}}
                source={require('../../assets/chovendoBranca.png')} />
              <Text style={styles.lineN}>Saturday, </Text>
              <Text style={styles.lineD}>8 Oct</Text>
              <Text style={styles.temp}>
                <Text style={styles.lineTN}>27 </Text>
                <Text style={styles.lineTM}>/ 28°</Text>
              </Text>
            </View>

            <View style={styles.content} className="h-screen">
              <Image style= {{height:40, width:40}}
                source={require('../../assets/chovendoBranca.png')} /> 
                <Text style={styles.lineN}>Sunday, </Text>
                <Text style={styles.lineD}>9 Oct</Text>
                <Text style={styles.temp}>
                  <Text style={styles.lineTN}>22 </Text>
                  <Text style={styles.lineTM}>/ 23°</Text>
                </Text>
            </View>
            
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A73FC',
  },
  content: {
    backgroundColor: '#4A73FC',
    paddingTop: 28,
    flexDirection: 'row',
    paddingStart: 22,
    paddingEnd: 13,
  },
  content2: {
    display: 'flex',
    width: '100%', 
    textAlign: 'center',
    flexDirection: 'row',
  },
  title:{
    textAlign: 'left',
    paddingLeft: 30,
    fontSize: 22,
    color: '#F8FAFD',
  },
  lineN:{
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    fontSize: 18,
    color: '#F8FAFD',
  },
  lineD:{
    display: 'flex',
    alignItems: 'center',
    fontSize: 15,
    color: '#cec9cb',
  },
  temp:{
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 8,
    paddingLeft: 285,
  },
  lineTM:{
        fontSize: 15,
    color: '#dcdcdc',
  },
  lineTN:{
    
    fontSize: 18,
    color: '#F8FAFD',
  },
  });
  