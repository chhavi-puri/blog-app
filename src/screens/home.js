import React, {useState,useEffect } from 'react';
import {TextField, Box,AppBar,Toolbar,Typography,Select,MenuItem,InputAdornment, 
    Paper, List, ListItem, IconButton,Divider,Collapse,
    Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {Menu as MenuIcon,Search, ExpandLess, ExpandMore} from '@material-ui/icons';
import  { API,graphqlOperation } from 'aws-amplify';
import awsExports from "../aws-exports.js";
import {getClub, listStudents, listClubs, getStudent, sortByType} from '../graphql/queries'
import { createStudent,createStudentClubJoined, createClub } from '../graphql/mutations.js';
import { customListStudents } from '../graphql/customQueries.js';
// function CallDialog(props){
//     const [studentName, setStudentName]= useState('')
//     const [departmentId, setDepartmentId]=useState('')
//     const [departmentDetails, setDepartmentDetails]= useState([]);
//     const [clubId, setClubtId]=useState('');
//     const [studentId, setStudentId]= useState('');
//     const [clubDetails, setClubDetails]= useState([]);
//     const [details, setDetails]= useState({
//         studentName: studentName,
//         studentDepartmentId: departmentId,
        
//     });
//     const handleClose=()=>{
//         props.onClose();
//         setDepartmentId('');
//     }
//     // async function createStudents(){
//     //   const clubInput={
//     //     clubName: "Codechef",
//     //     type: "Technical",
//     //     id: "Club-custom-id-2"
//     //   }
//     //   const studentInput={
//     //     studentName: "David",
//     //     id: "Student-custom-id-2"
//     //   }
//     //   //create new club
//     //  await API.graphql(graphqlOperation(createClub,{input:clubInput}));  
//     //  // create new student
//     //  await API.graphql(graphqlOperation(createStudent,{input:studentInput})).then(async()=>{
//     //     // join student and club
//     //   await API.graphql(graphqlOperation(createStudentClubJoined,{
//     //       input:{
//     //           studentClubJoinedClubId: clubInput.id, studentClubJoinedStudentId: studentInput.id
//     //       } 
//     //   }))});
//     //   // })
//     //   //   await API.graphql(graphqlOperation(createStudent,{input:details})).then(async(student)=>{
                
//     //   //           )).then((data)=>console.log(data))
//     //   //   });
//     // }
//     // async function getDepartmentDetails(){
//     //     await API.graphql(graphqlOperation(listDepartments)).then((department)=>{
//     //         const departmentData=department.data.listDepartments.items;
//     //         setDepartmentDetails(departmentData);
//     //     })
//     // }
    
//         // else{
//         //     console.log('in else')
//         // }
        
        
//     }
   
   

    // useEffect(() => {
    //       const id=departmentId
    //       console.log('departmentId=',departmentId)
    //       getClubDetails(id)
    // }, [departmentId]);
    // return(
    //     <Dialog open={props.open} onClose={handleClose}>
    //         <DialogTitle>
    //             Enter the details
    //         </DialogTitle>
    //         <DialogContent style={{flexDirection: 'column'}}>
    //             <Select variant='outlined' style={{color: 'white',marginLeft: 'auto',height:50, marginRight:5}}
    //                 onChange={(event)=>{
    //                     console.log('id is',event.target.value)
    //                     setDepartmentId(event.target.value)
    //                     setDetails({...details, studentDepartmentId: event.target.value})
    //                }}
    //                 label="Select department"
    //                 >
    //                     {
    //                         departmentDetails.map((element, key)=>(
    //                         <MenuItem key={key} value={element.id}>{element.departmentName}</MenuItem>
    //                         ))
    //                     }
    //             </Select>
    //             <Select variant='outlined' style={{color: 'white',marginLeft: 'auto',height:50, marginRight:5}}
    //                 value={clubId} disabled={departmentId? false: true}
    //                 onChange={(event)=>setClubtId(event.target.value)}
    //                 label="Select Club"
    //                 >
    //                     {
    //                         clubDetails.length? clubDetails.map((element, key)=>(
    //                             <MenuItem key={key} value={element.id}> {element.clubName}</MenuItem>
    //                             )): <MenuItem value={'add'}> Add details</MenuItem>
                            
    //                     }
    //             </Select>
    //             {
    //                 clubId=='add'? <TextFieldLayout  />: ''
    //             }
                
    //             <TextField
    //                 color='primary'
    //                 label={props.label} 
    //                 variant="outlined" 
    //                 value={studentName}
    //                 onChange={(event)=> {
    //                     setDetails({...details, studentName: event.target.value})
    //                     setStudentName(event.target.value)
    //                 }}
    //             />
    //         </DialogContent>
    //         <DialogActions>
    //             <Button onClick={handleClose}>
    //                 Cancel
    //             </Button>
    //             {/* <Button onClick={createStudents}>
    //                 Submit
    //             </Button> */}
    //         </DialogActions>
    //     </Dialog>
    // );
// }
function TextFieldLayout(props){
   return(
    <TextField
    className={props.className}
    style={props.style}
    color='primary'
    name= {props.name} 
    label={props.label} 
    variant="outlined" 
    required='true'  
    type= {props.type} 
    error={props.error}
    helperText={props.helperText}
    value={props.value}
    onChange={props.onChange}
/>
   );
}
function ListAllStudents(props){
    return(
        <List key={props.key} style={{display: 'flex'}} >
            <ListItem style={{display: 'flex',justifyContent: 'flex-end'}}  >
                <Typography style={{marginLeft: '5%', marginRight: 'auto'}}>
                 Name:{ props.name }
                </Typography>
               
                <Divider />
            </ListItem>
        </List>

    );
}
// function ListAllDepartments(props){
//     const [student, setStudent]= useState([]);
//     const [club, setClub]= useState([]);
//     const [showStudents, setShowStudents]= useState(false);
//     const [showClubs, setShowClubs]= useState(false);
//     async function callStudents(){
//         await API.graphql(graphqlOperation(getDepartment,{id: props.id})).then((department)=>{
//             const studentData=department.data.getDepartment.student.items;
//             const clubData= department.data.getDepartment.club.items;
//             setClub(clubData);
//             setStudent(studentData);
//           console.log(department)
//         }
//      );
//     }








//     return(
//         console.log('id is ', props.id),
//         <List key={props.key} style={{display: 'flex'}} >
//             <ListItem style={{display: 'flex',justifyContent: 'center'}}  >
//                 <Typography >
//                      Department:{ props.departmentName }
//                 </Typography>
//                 <IconButton
//                     style={{marginLeft:'5%'}} //Students
//                     onClick={()=>{
//                         setShowStudents(!showStudents)
//                         callStudents()
//                     }}
//                     >
//                         Students
//                    {showStudents ? <ExpandLess /> : <ExpandMore />}
//                 </IconButton>
//                 <IconButton
//                     style={{marginLeft:'5%'}} //Club
//                     onClick={()=>{
//                         setShowClubs(!showClubs)
//                         callStudents()}}
//                     >
//                         Club
//                    {showClubs ? <ExpandLess /> : <ExpandMore />}
//                 </IconButton>
//             </ListItem>
//             <Divider />
//             <Collapse in={showStudents} timeout="auto" unmountOnExit>
//                 {
//                     student.map((element, key)=>(
//                         <ListAllStudents key={key}  name={element.studentName}/>
//                     ))
//                 }
//             </Collapse>
//             <Collapse in={showClubs} timeout="auto" unmountOnExit>
//                 {
//                     club.map((element, key)=>(
//                         <ListAllStudents key={key}  name={element.clubName}/>
//                     ))
//                 }
//             </Collapse>
//         </List>

//     );
// }
export default function Home(){
    const [selectValue, setSelectValue]=useState('books');
    const [search, setSearch]=useState('');
    const [openDialog, setOpenDialog]= useState(false);
    const [sortBy, setSortBy ] =useState('');
    const [departmentDetails, setDepartmentDetails]= useState([]);
    const [studentDetails ,setStudentDetails]= useState([]);
    const [clubDetails ,setClubDetails]= useState([]);
    const [searchedDepartment, setSearchedDepartment]=useState([]);
    const [searchedClub, setSearchedClub]=useState([]);
    const [searchedStudent, setSearchedStudent]=useState([]);
    const [clubType, setClubType]= useState([]);

    async function getClubDetails(){
         try{
              await API.graphql(graphqlOperation(getClub,{id: "custom-id-c-01"})).then((club)=>{
                console.log('club details are',club.data.getClub);
           })
          }catch(err){
              console.log('err',err )
          }
      }
    

    // async function getstudentByclubs(){
    //   // console.log('inside getcLubDetais',id)
      
    //       try{
    //           await API.graphql(graphqlOperation(getClub,{id: "Club-custom-id-2"})).then((students)=>{
    //               console.log('department name is',students.data.getClub.student.items);
    //               // await API.graphql()
    //               // const clubData=club.data.getDepartment.club.items;
    //               // setClubDetails(clubData);
    //           })
    //       }catch(err){
    //           console.log('err',err )
    //       }
    //   }
  useEffect(() => {
    
    getClubDetails();
   
  }, []);
    const onClose=()=>{
        setOpenDialog(false);
    }
    // async function searchByDepartment(){
    //     try{
    //       await API.graphql(graphqlOperation(listDepartments, {filter:{
    //         departmentName:{
    //           beginsWith: search
    //         }
    //       }})).then((department)=>{
    //         console.log('books',department.data.listDepartments.items);
    //         setSearchedDepartment(department.data.listDepartments.items);
    //       })
    //     }catch(error){
    //       console.log(error)
    //     }
    //   }
      async function searchByClub(){
        try{
          await API.graphql(graphqlOperation(listClubs, {filter:{
            clubName:{
              beginsWith: search
            }
          }})).then((club)=>{
            console.log('books',club.data.listClubs.items);
            setSearchedClub(club.data.listClubs.items);
          })
        }catch(error){
          console.log(error)
        }
      }
      async function searchByStudent(){
        try{
          await API.graphql(graphqlOperation(listStudents, {filter:{
            studentName:{
              beginsWith: search
            }
          }})).then((student)=>{
            console.log('books',student.data.listStudents.items);
            setSearchedStudent(student.data.listStudents.items);
          })
        }catch(error){
          console.log(error)
        }
      }
      async function searchClubsbyType(){
        console.log('searchClubsbyType',search)
        await API.graphql(graphqlOperation(sortByType, {type: search})).then((data)=>{ 
            console.log(data.data.SortByType.items)
            setClubType(data.data.SortByType.items);
        }).catch((err)=>console.log(err))
    }
    async function getAllStudents(){
        await API.graphql(graphqlOperation(customListStudents)).then(
            (data)=> {console.log(data.data.listStudents.items);
                setStudentDetails(data.data.listStudents.items)
            }).catch((err)=>console.log(err))
    }
    // async function getDepartmentDetails(){
        
    //   await API.graphql(graphqlOperation(listDepartments)).then((department)=>{
    //         const departmentData=department.data.listDepartments.items;
    //       setDepartmentDetails(departmentData)
    //     }
    //  );
        
    // }
    async function getStudentsbyClub(){
        await API.graphql(graphqlOperation(listClubs)).then((data)=>{ 
            console.log(data.data.listClubs.items)
            setClubDetails(data.data.listClubs.items);
        }).catch((err)=>console.log(err))
    }
    
    useEffect(()=>{
        if(search==''){
          setSearchedDepartment([]);
          setSearchedStudent([]);
          setSearchedClub([]);
        }else {
          // if(selectValue=='department'){
          //   searchByDepartment();
          // }
          // else
           if(selectValue=='club'){
            searchByClub();
          }else if(selectValue=='student'){
            searchByStudent();
          }else if(selectValue=='ByClubType'){
            searchClubsbyType()
        }
          
          
        }
      },[search])
    // useEffect(() => {
    //     getDepartmentDetails()  
    //   }, []);
    useEffect(() => {
      if(sortBy=='ByStudent'){
        getAllStudents();
      }
      else if(sortBy=='ByClub'){
        getStudentsbyClub()
    }
     else {
       console.log('in else')
     }
    }, [sortBy])
    return(
       <Box>
            <AppBar>
              <Toolbar>
                <MenuIcon />
                <Typography style={{marginLeft:'43%'}} variant="h6" >
                  Good Read
                </Typography>
                <Select variant='outlined' style={{color: 'white',marginLeft: 'auto',height:50, marginRight:5}}
                  value={selectValue}
                  onChange={(event)=>setSelectValue(event.target.value)}
                  label="Select one"
                >
                  <MenuItem value={'department'}>Search Department</MenuItem>
                  <MenuItem value={'club'}>Search Club</MenuItem>
                  <MenuItem value={'student'}>Search Student</MenuItem>
                  <MenuItem value="ByClubType">Search Club Type</MenuItem>
                </Select>
                <TextField style={{backgroundColor:'white',height:50,  width: 200}}
                  placeholder='Search' variant='filled' 
                  onChange={(event)=>{
                    setSearch(event.target.value)} }
                  InputProps={{ 
                    startAdornment:(
                      <InputAdornment position="start">
                              <Search />
                      </InputAdornment>),
                  }}
                />
                <Button style={{marginLeft: 5,color:'white'}} variant='outlined' onClick={()=>setOpenDialog(true)}>
                    Add details
                </Button>
              </Toolbar>
            </AppBar>
            {/* <CallDialog open={openDialog} onClose={onClose} /> */}
            <Paper style={{height: '100%', width: '80%', marginTop: '11.5%', marginLeft: '10%'}}>
            <Box style={{display: 'flex'}}>
                <Typography style={{marginLeft:'35%' }} >
                   Details
                </Typography>
                <Typography style={{marginLeft:'auto' }} >
                    Sort:
                </Typography>
                <Select variant='outlined' style={{color: 'white',height:50, marginLeft: 15,marginRight:5}}
                    onChange={(event)=>{
                        console.log('id is',event.target.value)
                        setSortBy(event.target.value)
                     }}
                    label="Sort by"
                    >
                         <MenuItem value="ByStudent">All students</MenuItem>
                         <MenuItem value="ByDepartment">All Departtment</MenuItem>
                         <MenuItem value="ByClub">All Club</MenuItem>
                        
                </Select>
              </Box>
              {
              /* { searchedDepartment.length?  searchedDepartment.map((element, key)=>(
                  
                  <ListAllDepartments key={key} id={element.id} departmentName={element.departmentName}/>
              )): */
              searchedClub.length? searchedClub.map((element, key)=>(
                <ListAllStudents key={key}  name={element.clubName}/>
            )): searchedStudent.length? searchedStudent.map((element, key)=>(
                <ListAllStudents key={key}  name={element.studentName}/>
               )): clubType.length? clubType.map((element, key)=>(
                <ListAllStudents key={key}  name={element.clubName}/>
               )): ''
            }
            {
               

               sortBy=='ByStudent'? studentDetails.map((element, key)=>(
                <ListAllStudents key={key}  name={element.studentName}/>
               )): 
              //  sortBy=='ByDepartment'? departmentDetails.map((element, key)=>(
                  
            //     <ListAllDepartments key={key} id={element.id} departmentName={element.departmentName}/>
            // )): sortBy=='ByClub'?  clubDetails.map((element, key)=>(
            //     <ListAllStudents key={key}  name={element.clubName}/>
            // ))
            // :
             ''

               
            }
            </Paper>    
        </Box>
       
    );
}