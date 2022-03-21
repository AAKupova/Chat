import styled from "styled-components";

const modToStyleSize = {
  size_m: {
    sizeAvatar: "60px",
    sizeActive: "10px",
    left: "2px",
  },

  size_l: {
    sizeAvatar: "120px",
    sizeActive: "20px",
    left: "5px",
    top: "8px",
  },
};

export const Wrapper = styled.div`
  position: relative;
`;
export const Images = styled.img<{
  size?: string;
}>`
  object-fit: initial;
  border-radius: 100%;
  width: ${(props) => modToStyleSize[props.size]?.sizeAvatar || "40px"};
  height: ${(props) => modToStyleSize[props.size]?.sizeAvatar || "40px"};
  background-color: ${({ theme: { colors } }) => colors.dark};
  border: 1px solid ${({ theme: { colors } }) => colors.accent};
`;

export const IsOnline = styled.span<{
  size?: string;
}>`
  display: block;
  position: absolute;
  border-radius: 100%;
  top: ${(props) => modToStyleSize[props.size]?.top || "5px"};
  left: ${(props) => modToStyleSize[props.size]?.left || "-1px"};
  background-color: ${({ theme: { colors } }) => colors.online};
  width: ${(props) => modToStyleSize[props.size]?.sizeActive || "8px"};
  height: ${(props) => modToStyleSize[props.size]?.sizeActive || "8px"};
`;
