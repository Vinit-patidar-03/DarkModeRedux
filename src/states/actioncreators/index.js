export const DarkMode = (Theme)=>
{
    return (dispatch)=>
{
    dispatch({
        type : 'dark',
        payload : Theme
    })
}
}

export const LightMode = (Theme)=>
{
    return (dispatch)=>
{
    dispatch({
        type : 'light',
        payload : Theme
    })
}
}