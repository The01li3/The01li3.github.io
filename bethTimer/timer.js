function widget_addLoadEvent(pFunction)
{
    var vfnOldOnLoad = window.onload;
    if (typeof window.onload != 'function')
    {
        window.onload = pFunction;
    }
    else
    {
        window.onload = function()
        {
            vfnOldOnLoad();
            pFunction();
        }
    }
};