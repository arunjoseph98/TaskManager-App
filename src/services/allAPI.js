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

// get task board name
export const getTaskBoardTitleAPI = async (id) => {
    return await commonAPI(`GET`,`${SERVERURL}/taskBoards/${id}`,"")
    
}

//getOverdueTasks
export const getOverdueTasksAPI = async (id) => {
    return await commonAPI(`GET`,`${SERVERURL}/tasks?isOverdue=true&boardId=${id}&isComplete=false`,"")
}

//getAllTask
export const getAllTaskAPI = async (id,status) => {
    return await commonAPI(`GET`,`${SERVERURL}/tasks?isComplete=${status}&boardId=${id}`,"")
}




//UPDATE
//edit task board
export const editBoardAPI= async (boardDetails) =>{
    return await commonAPI('PUT',`${SERVERURL}/taskBoards/${boardDetails.id}`,boardDetails)
}

//edit task 
export const editTaskAPI= async (TaskDetails) =>{
    return await commonAPI('PUT',`${SERVERURL}/tasks/${TaskDetails.id}`,TaskDetails)
}

//edit task Status 
export const updateStatusAPI= async (id,Status) =>{
    return await commonAPI('PATCH',`${SERVERURL}/tasks/${id}`,Status)
}

//edit task isOverdue 
export const updateOverdueAPI= async (id,Status) =>{
    return await commonAPI('PATCH',`${SERVERURL}/tasks/${id}`,Status)
}

//DELETE
//delete task board
export const deleteBoardAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/taskBoards/${id}`,{})
}

//get Task For deleteBoardAPI
export const getTaskFordeleteBoardAPI= async (id) =>{
    return await commonAPI(`GET`,`${SERVERURL}/tasks?boardId=${id}`,'')
}

//delete task 
export const deleteTaskAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/tasks/${id}`,{})
}