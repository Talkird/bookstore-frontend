import PropTypes from "prop-types";

function ContactInfo({ title, info }) {
  return (
    <div className="transform rounded-lg border p-6 transition-transform duration-300 hover:scale-105 hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 hover:shadow-xl">
      <h4 className="mb-2 text-lg font-bold uppercase">{title}</h4>
      <p className="text-md">{info}</p>
    </div>
  );
}

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default ContactInfo;
