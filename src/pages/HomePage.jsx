import backgroundImage from "../img/bg/WIN_20220819_17_00_22_Pro.jpg"; 
 
export default function Home() {

    

    return (
        <>
        <div style={{ 
        backgroundImage: 'url(' + backgroundImage + ')', 
        width: "112vmin",
        height: "80vmin"}}>
            <h1>Home</h1>
            <p>Content from home goes here.</p>
            </div>
            </>
    );
        
}