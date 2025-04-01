// AddressDetails.jsx
import { MapPin, Clock, Phone } from 'lucide-react';

const AddressDetails = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 text-gray-800 space-y-6 max-w-3xl mx-auto">
      <div className="flex items-start gap-4">
        <MapPin className="text-orange-500 w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold text-lg">Head Office</h4>
          <p>Rapido HQ, 4th Floor, IT Park, Pune, Maharashtra, India - 411001</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Clock className="text-orange-500 w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold text-lg">Working Hours</h4>
          <p>Monday to Saturday, 9:00 AM – 6:00 PM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Phone className="text-orange-500 w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold text-lg">Customer Support</h4>
          <p>+91 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
