const BASE_URL = 'http://localhost/react_api';
export const Blog = async()=>{
    try{
        const response = await fetch(`${BASE_URL}/blog.php`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }catch (error){
        throw new Error (`Error fetching blogs data:${error.message}`);
    }
};
export const HomeBlog = async()=>{
    try{
        const response = await fetch(`${BASE_URL}/home_blog.php`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }catch (error){
        throw new Error (`Error fetching homeblogs data:${error.message}`);
    }
};