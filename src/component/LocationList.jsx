const LocationList = ({ children }) => {
    return (
        <div id="location-list" className="grid grid-cols-4 gap-4">
            {children}
        </div>
    );
}

export default LocationList