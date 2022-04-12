import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button,TextInput, StyleSheet, Text, View ,Pressable,TouchableOpacity} from 'react-native';

export default function App() {
  
  const [todos,setTodos] = React.useState([]);

  const [todoText,setTodoText] = React.useState('');


  function handleClick(){
    if(todoText===''){
      return;
    }
    setTodos([todoText,...todos]);
    setTodoText('');
  }
  function updateText(e){
    setTodoText(e.target.value);
  }
  function handleDelete(e){
    let newArr = todos.filter((value,index)=>index!=e);
    setTodos(newArr);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={todoText} onChange={updateText} placeholder="Enter Todo"/>
        <Button title='Add todo' onPress={handleClick} ></Button>  
      </View>
      <View style={styles.todos}>
      {
        todos.map((val,index)=>{
          return <View key={index} style={styles.todo}>
            <Text style={styles.todoIndex}>{index+1}.</Text>
            <Text style={styles.todoValue}>{val}</Text>
            <TouchableOpacity onPress={()=>handleDelete(index)} key={index}>
              <Text style={styles.deleteBtn}>X</Text>
            </TouchableOpacity>
          </View>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#abb8c3',
    height:'100vh'
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:'3em',
    marginBottom:'2em'
  },
  input:{
    backgroundColor:'white',
    fontSize:'18px'
  },
  todos:{
    alignItems:'center'

  },
  todo:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    width:'80%',
    marginTop:'5px',
    marginBottom:'5px',
    
  },
  todoIndex:{
    fontSize:'20px'
  },
  todoValue:{
    fontSize:'20px',
    flex:'1',
    marginLeft:'10px'
  },
  deleteBtn:{
    fontSize:'20px',
    backgroundColor:'red',
    color:'white',
    fontWeight:'bold',
    paddingLeft:'10px',
    paddingRight:'10px'
  }
  
});
