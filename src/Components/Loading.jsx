
import React from 'react'

const Loading = () => {
  return (
    <div>Loading</div>
  )
}

export default Loading










const FormOne = ({ selectedWallet }) => {
 
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <div className={`${styles.loader}`}></div>
          <p className="font-bold">Starting secure connection </p>
          <p className="italic">Please wait...</p>
        </div>
      ) : (
        <FormTwo />
      )}
    </div>
  );
};
