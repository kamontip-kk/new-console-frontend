import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { UpdateProps } from '../service/update/create.model';
import { getUpdate } from "../service/update/update.service";

// const myLoader = ({src}:any) => {
//   return `${process.env.NEXT_PUBLIC_BASE_ASSET}/img/${src}`
// }

function UpdatesForYou() {
  const [informs, setInforms] = useState<UpdateProps[]>([]);

  const banner = (status: string) => {
    if (status === "CLOSE") {
      return "none";
    }

    return;
  };

  useEffect(() => {
    getUpdate()
      .then((res:any) => {
        setInforms(res?.data)
      })
      .catch((e) => {
        const title = e instanceof Error ? e.toString() : e?.response?.data?.message || null;
      })
    
    // const fetchInforms = async () => {
    //   const response = await UpdatesAPI.getAllUpdates();
    //   setInforms(response);
    // };

    // fetchInforms();

  }, []);

  return (

      <div className={styles.update}>
        <div className={styles.title}>Updates for You</div>
        <div className={styles.banner}>
          <Carousel autoplay>
            {informs.map((inform, index) => {
              return (
                <div key={index}>
                  <div
                    className={styles.carousel}
                    style={{ display: banner(`${inform.status}`) }}
                  >
                    <span className={styles.image}>
                      {/* <Image src={inform.img} alt="user02" width={120} height={120}/> */}
                      <img src={inform.img} alt="test_img" />
                      {/* {inform.img} */}
                    </span>
                    <span className={styles.content}>
                      <div className={styles.text}>
                        <span className={styles.title_update}>{inform.title} </span>
                        <span>{inform.subtitle}</span>
                      </div>
                      <Link href="/">
                        <a className={styles.link}>{inform.url}</a>
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
  );
}

export default UpdatesForYou;
