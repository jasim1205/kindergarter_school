// const BASE_URL = 'http://localhost/react_api';

export const Teacher = async () => {
    try {
        // const response = await fetch(`${BASE_URL}/teachers.php`);
        const response = await fetch(`${global.config.apiUrl}teacher`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching teachers data: ${error.message}`);
    }
};
export const HomeTeacher = async () => {
    try {
        // const response = await fetch(`${BASE_URL}/home_teachers.php`);
        const response = await fetch(`${global.config.apiUrl}teacher`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching hometeachers data: ${error.message}`);
    }
};