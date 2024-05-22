import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
  Alert,
  Modal,
  Pressable
} from 'react-native';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

export default function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Patricccccckkkkkkkkkkkkk NOnnnnnnnnnnn tu me déçois',
      'il faut mettre un mot à plus de 5 caractères',
      [
        {
          text: 'compris',
          onPress: () => console.warn('refuse'),
        },
        {
          text: "D'accord",
          onPress: () => console.warn('refuse'),
        },
        {
          text: 'Ok',
          onPress: () => console.warn('refuse'),
        },
      ],
      { cancelable: true }
    );
  };

  const submitHandler = (item) => {
    if (item.length > 5) {
      const idString = Date.now().toString();
      setItems((currentItems) => [
        { key: idString, name: item },
        ...currentItems,
      ]);
    } else {
      setShowModal(true);
    }
  };

  const deleteProduct = (key) => {
    setItems((currentItems) => {
      return currentItems.filter((item) => item.key != key);
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    showAlert();
  };

  return (
    <View style={styles.container}>
      <Modal 
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}> 
                Oups il y a une erreur !!
              </Text>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalBodyText}> 
                Plus de 5 caractères svp  
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <Pressable 
                style={styles.pressableBtnModal}
                onPress={handleModalClose}
              > 
                <Text style={styles.modalBtn}> 
                  D'accord
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      
      <AddProduct submitHandler={submitHandler} />

      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={items}
        renderItem={({ item }) => (
          <Products
            item={item}
            idString={item.key}
            deleteProduct={deleteProduct}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    paddingTop: 60,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    height: 250,
    borderRadius: 20,
    padding: 9,
    alignItems: 'center',
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 5,
    borderBottomColor: "lightgray",
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 25
  },
  modalBody: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17
  },
  modalFooter: {
    width: "100%"
  },
  pressableBtnModal: {
    borderRadius: 30,
    backgroundColor: "lightseagreen",
  },
  modalBtn: {
    width: "100%",
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    padding: 16
  },
});
