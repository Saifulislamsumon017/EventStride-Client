const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center  border rounded-xl p-6 shadow hover:shadow-md transition duration-300 ease-in-out">
      <Icon className="text-[#c0122d] dark:text-yellow-300 text-5xl mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
