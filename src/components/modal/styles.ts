import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  /* box-shadow: #000;
  shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4, */
  elevation: 5;
`

// const styles = StyleSheet.create({
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
// });

export const Button = styled.Pressable`
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
`

export const ButtonOpen = styled(Button)`
  background-color: #f194ff;
`

export const ButtonClose = styled(Button)`
  background-color: #2196f3;
`

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`
