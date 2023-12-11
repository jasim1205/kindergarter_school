const BASE_URL = 'http://localhost/react_api';

export const Abouts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/about.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching abouts data: ${error.message}`);
    }
};
