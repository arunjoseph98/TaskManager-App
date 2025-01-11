import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// CREATE
// create task board
export const addTaskBoardAPI = async (boardDetails) => {
    return await commonAPI(`POST`,`${SERVERURL}/taskBoards`,boardDetails)
}

//READ
// get task board
export const getTaskBoardAPI = async () => {
    return await commonAPI(`GET`,`${SERVERURL}/taskBoards`,"")
}

//UPDATE
//edit task board
export const editBoardAPI= async (boardDetails) =>{
    return await commonAPI('PUT',`${SERVERURL}/taskBoards/${boardDetails.id}`,boardDetails)
}

//DELETE
//delete task board
export const deleteBoardAPI= async (id) =>{
    return await commonAPI('DELETE',`${SERVERURL}/taskBoards/${id}`,{})
}