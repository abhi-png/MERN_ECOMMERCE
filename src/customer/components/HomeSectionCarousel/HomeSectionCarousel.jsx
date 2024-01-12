import React, { useState, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef();

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
        carouselRef.current.slidePrev();
    };

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
        carouselRef.current.slideNext();
    };

    const items = data.slice(0, 30).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    ref={carouselRef}
                />

                {activeIndex !== items.length - 6 && (
                    <Button
                        onClick={slideNext}
                        variant="outlined"
                        className="z-50"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white",
                            border: "none",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                            "&:hover": {
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                                border: "none",
                            },
                        }}
                        aria-label="next"
                    >
                        <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}

                {activeIndex !== 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="outlined"
                        className="z-50"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white",
                            border: "none",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                            "&:hover": {
                                boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                                border: "none",
                            },
                        }}
                        aria-label="prev"
                    >
                        <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
