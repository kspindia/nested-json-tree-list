import React, { useState } from "react";

function List({ item }) {
  const [show, setShow] = useState(false);
  const [cluster, setCluster] = useState(false);
  const [EMS, setEMS] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const handleCluster = () => {
    setCluster((prev) => !prev);
  };
  const handleEMS = () => {
    setEMS((prev) => !prev);
  };

  return (
    <div className="red">
      <ul>
        <li key={item.name}>
          <i onClick={handleShow} className='cursor'>
            {show ? <span>&#8595;</span> : <span>&#x2192;</span>}
          </i>
          <span > {item.name} </span>
          {show && (
            <ul>
              <li key={item.clusters}>
                {item.clusters &&
                  item.clusters.map((c) => (
                    <>
                      <span onClick={handleCluster} className='cursor'>{c.name}</span>
                      {cluster && (
                        <ul>
                          {c.products &&
                            c.products.map((p) => (
                              <>
                                <li key={p.name} onClick={handleEMS} className='cursor'>
                                  {p.name}
                                  {EMS && (
                                    <ul key={p.environments}>
                                      {p.environments &&
                                        p.environments.map((en) => (
                                          <>
                                            <ul>
                                              common
                                              <li key={en.services}>
                                                {en.services.common &&
                                                  en.services.common.map(
                                                    (sc) => (
                                                      <ul>
                                                        <li key={sc.name}>
                                                          {sc.name}
                                                        </li>
                                                      </ul>
                                                    )
                                                  )}
                                              </li>
                                            </ul>
                                            <ul>
                                              business
                                              <li key={en.services}>
                                                {en.services.business &&
                                                  en.services.business.map(
                                                    (b) => (
                                                      <ul>
                                                        <li key={b.name}>
                                                          {b.name}
                                                        </li>
                                                      </ul>
                                                    )
                                                  )}
                                              </li>
                                            </ul>
                                          </>
                                        ))}
                                    </ul>
                                  )}
                                </li>
                              </>
                            ))}
                        </ul>
                      )}
                    </>
                  ))}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default List;
