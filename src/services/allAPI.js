import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// CREATE
// create task board
export const addTaskBoardAPI = async (boardDetails) => {
    return await commonAPI(`POST`,`${SERVERURL}/taskBoards`,boardDetails)
}

// create task 
export const addTaskAPI = async (taskDetails) => {
    return await commonAPI(`POST`,`${SERVERURL}/tasks`,taskDetails)
}

//READ
// get task board
export const getTaskBoardAPI = async () => {
    return await commonAPI(`GET`,`${SERVERURL}/taskBoards`,"")
}

//getAllTask
export const getAllTaskAPI = async (id) => {
    return await commonAPI(`GET`,`${SERVERURL}/tasks?boardId=${id}`,"")
}

//UPDATE
//edit task board
export const editBoardAPI= async (boardDetails) =>{
    return await commonAPI('PUT',`${SERVERURL}/taskBoards/${boardDetails.id}`,boardDetails)
}

Axios 

//DELETE
//delete task board
export const deleteBoardAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/taskBoards/${id}`,{})
}

//delete task 
export const deleteTaskAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/tasks/${id}`,{})
}