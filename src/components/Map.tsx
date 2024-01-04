import {
  APIProvider,
  Map as GoogleMap,
  Marker
} from "@vis.gl/react-google-maps";
const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  return (
    <div className="w-full h-[75vh]">
      <APIProvider apiKey="AIzaSyCWz6D0_h8SMAIJ69s36tNj1zbpFf1MMVM">
        <GoogleMap zoom={9} center={{ lat, lng }}>
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      </APIProvider>
    </div>
  );
};

export default Map;
