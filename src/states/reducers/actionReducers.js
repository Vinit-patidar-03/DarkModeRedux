const reducer = (state = 'light',action)=>
{
   if(action.type === 'light')
   {
     return document.body.style.backgroundColor = 'white';
   }
   else if(action.type === 'dark')
   {
    return document.body.style.backgroundColor = 'black';
   }
   else
   {
    return document.body.style.backgroundColor = 'white';
   }
}

export default reducer;