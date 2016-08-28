import React from 'react';

const iconMapping = {
  like: (<g id="like" transform="translate(1.000000, 1.000000)">
    <path d="M50,15.6196552 C50,15.6196552 44.271,0 27.252,0 C10.245,0 0,16.7731034 0,30.597931 C0,53.7662069 50,89.0772414 50,89.0772414 C50,89.0772414 100,53.7744828 100,30.602069 C100,16.7731034 89.76,0 72.748,0 C55.736,0 50,15.6196552 50,15.6196552 Z" id="Shape"></path>
  </g>),
  pass: (<g id="pass" transform="translate(-0.137931, 0.000000)">
    <path d="M56.18032,43.54739 L84.81787,14.90984 C85.6619802,14.0660612 86.1362242,12.9214527 86.1362242,11.727935 C86.1362242,10.5344173 85.6619802,9.38980877 84.81787,8.54603 L78.45406,2.18168 C76.696718,0.424421372 73.847592,0.424421372 72.09025,2.18168 L43.45225,30.81968 L14.8147,2.18168 C13.057358,0.424421372 10.208232,0.424421372 8.45089,2.18168 L2.0869,8.54603 C0.329641372,10.303372 0.329641372,13.152498 2.0869,14.90984 L30.724,43.54739 L2.086,72.18539 C0.328741372,73.942732 0.328741372,76.791858 2.086,78.5492 L8.45071,84.9131 C10.208052,86.6703586 13.057178,86.6703586 14.81452,84.9131 L43.45252,56.2751 L72.09007,84.9131 C72.9338488,85.7572102 74.0784573,86.2314542 75.271975,86.2314542 C76.4654927,86.2314542 77.6101012,85.7572102 78.45388,84.9131 L84.81769,78.54929 C85.6618002,77.7055112 86.1360442,76.5609027 86.1360442,75.367385 C86.1360442,74.1738673 85.6618002,73.0292588 84.81769,72.18548 L56.18032,43.54739 Z" id="Shape"></path>
  </g>),
  superlike: (<g id="superlike" transform="translate(3.000000, 3.000000)">
    <polygon id="Shape" points="47.0809914 0.456634183 58.1748491 34.4841229 94.108125 34.4841229 65.0356034 55.5218816 76.1394828 89.5433658 47.0809914 68.5256222 17.9824138 89.5433658 29.1283836 55.5218816 0.0298060345 34.4841229 35.9911422 34.4841229"></polygon>
  </g>
),
  notificationMatch: (<g> <g> <path d="M38.143,39.458c-10.879,0-19.729-8.851-19.729-19.729S27.264,0,38.143,0s19.729,8.85,19.729,19.729 S49.022,39.458,38.143,39.458z M38.143,4.384c-8.461,0-15.345,6.884-15.345,15.345c0,8.461,6.884,15.345,15.345,15.345 c8.461,0,15.345-6.884,15.345-15.345C53.488,11.268,46.604,4.384,38.143,4.384z" /> </g> <g> <path fill="#FFFFFF" d="M20.606,40.774c0,0-18.414,5.261-18.414,22.798" /> <path d="M2.192,65.764C0.981,65.764,0,64.783,0,63.572c0-18.971,19.804-24.849,20.004-24.906c1.161-0.332,2.377,0.341,2.71,1.505 c0.332,1.163-0.34,2.375-1.501,2.709l0,0c-0.043,0.013-4.369,1.29-8.594,4.544c-5.464,4.208-8.234,9.641-8.234,16.147 C4.384,64.783,3.403,65.764,2.192,65.764z" /> </g> <g> <path fill="#FFFFFF" d="M55.68,40.774c0,0,18.414,5.261,18.414,22.798" /> <path d="M74.094,65.764c-1.211,0-2.192-0.981-2.192-2.192c0-6.507-2.771-11.94-8.234-16.147c-4.225-3.254-8.551-4.531-8.594-4.544c-1.161-0.336-1.833-1.55-1.499-2.712s1.543-1.834,2.707-1.502c0.2,0.057,20.004,5.935,20.004,24.906C76.287,64.783,75.305,65.764,74.094,65.764z" /> </g> <g> <line fill="#FFFFFF" x1="14.03" y1="56.996" x2="14.03" y2="63.572" /> <path d="M14.03,64.887c-0.727,0-1.315-0.589-1.315-1.315v-6.576c0-0.727,0.589-1.315,1.315-1.315s1.315,0.589,1.315,1.315v6.576 C15.345,64.298,14.756,64.887,14.03,64.887z" /> </g> <g> <line fill="#FFFFFF" x1="64.887" y1="56.996" x2="64.887" y2="63.572" /> <path d="M64.887,64.887c-0.727,0-1.315-0.589-1.315-1.315v-6.576c0-0.727,0.588-1.315,1.315-1.315s1.315,0.589,1.315,1.315v6.576 C66.203,64.298,65.614,64.887,64.887,64.887z" /> </g> <g> <line fill="#FFFFFF" x1="70.879" y1="4.238" x2="70.879" y2="16.514" /> <path d="M70.879,17.829c-0.727,0-1.315-0.589-1.315-1.315V4.238c0-0.727,0.589-1.315,1.315-1.315s1.315,0.589,1.315,1.315v12.276 C72.194,17.24,71.606,17.829,70.879,17.829z" /> </g> <g> <line fill="#FFFFFF" x1="64.741" y1="10.376" x2="77.017" y2="10.376" /> <path d="M77.017,11.691H64.741c-0.727,0-1.315-0.588-1.315-1.315s0.589-1.315,1.315-1.315h12.276c0.727,0,1.315,0.589,1.315,1.315 S77.744,11.691,77.017,11.691z" /> </g> </g>),
  notificationSuperlike: (<g><path d="M39.905,67.125c-8.759,0-17.149-2.629-23.716-7.417L1.868,63.33c-0.515,0.13-1.057-0.021-1.431-0.395c-0.373-0.375-0.521-0.919-0.391-1.432L4.69,43.38c-0.521-2.056-0.784-4.144-0.784-6.213c0-0.837,0.043-1.689,0.127-2.534c0.081-0.825,0.812-1.423,1.641-1.344c0.824,0.082,1.426,0.817,1.344,1.641c-0.073,0.746-0.111,1.499-0.111,2.237c0,1.936,0.264,3.893,0.782,5.818c0.067,0.25,0.069,0.513,0.005,0.763L3.58,59.803l12.567-3.177c0.44-0.113,0.911-0.017,1.276,0.261c6.129,4.668,14.113,7.239,22.481,7.239c0.828,0,1.5,0.671,1.5,1.5S40.733,67.125,39.905,67.125z" /><path d="M46.883,61.917c-20.4,0-36.998-13.888-36.998-30.958S26.482,0,46.883,0s36.998,13.888,36.998,30.958c0,2.073-0.253,4.159-0.752,6.209l4.581,17.878c0.219,0.854-0.028,1.761-0.651,2.385c-0.622,0.625-1.53,0.875-2.383,0.659l-13.872-3.507C64.125,59.321,55.682,61.917,46.883,61.917z M46.883,5C29.239,5,14.885,16.645,14.885,30.958s14.354,25.958,31.998,25.958c8.149,0,15.919-2.499,21.877-7.035c0.605-0.462,1.387-0.623,2.128-0.435l10.935,2.765l-3.696-14.424c-0.106-0.418-0.104-0.856,0.009-1.272c0.495-1.834,0.746-3.704,0.746-5.557C78.881,16.645,64.526,5,46.883,5z" /><path d="M39.189,43.304c-0.311,0-0.62-0.097-0.882-0.287c-0.462-0.335-0.693-0.904-0.597-1.467l1.214-7.07l-5.138-5.007c-0.409-0.398-0.556-0.995-0.38-1.538c0.177-0.543,0.646-0.939,1.211-1.021l7.1-1.032l3.176-6.433c0.252-0.512,0.773-0.836,1.345-0.836l0,0c0.571,0,1.093,0.324,1.345,0.836l3.175,6.432l7.099,1.032c0.565,0.082,1.034,0.478,1.211,1.021c0.176,0.543,0.029,1.139-0.38,1.538l-5.137,5.007l1.213,7.071c0.097,0.562-0.135,1.131-0.597,1.467c-0.463,0.337-1.074,0.38-1.58,0.114l-6.349-3.338l-6.351,3.338C39.668,43.247,39.429,43.304,39.189,43.304z M38.058,29.446l3.525,3.436c0.354,0.345,0.515,0.841,0.432,1.328l-0.833,4.852l4.358-2.291c0.438-0.23,0.959-0.229,1.396,0l4.356,2.291l-0.832-4.852c-0.083-0.486,0.078-0.983,0.432-1.328l3.525-3.436l-4.872-0.708c-0.488-0.071-0.911-0.378-1.129-0.821l-2.179-4.414l-2.18,4.415c-0.218,0.442-0.641,0.75-1.129,0.82L38.058,29.446z" /></g>),
  notificationLike: (
    <g><path d="M39.905,67.125c-8.759,0-17.149-2.629-23.716-7.417L1.868,63.33c-0.516,0.13-1.058-0.021-1.431-0.395c-0.373-0.375-0.521-0.919-0.391-1.432L4.69,43.38c-0.521-2.056-0.784-4.144-0.784-6.213c0-0.837,0.043-1.689,0.127-2.534c0.081-0.825,0.817-1.423,1.641-1.344c0.824,0.082,1.426,0.817,1.344,1.641c-0.073,0.746-0.111,1.499-0.111,2.237c0,1.936,0.264,3.893,0.782,5.818c0.067,0.25,0.069,0.513,0.005,0.763L3.58,59.803l12.567-3.177c0.439-0.113,0.911-0.017,1.276,0.261c6.129,4.668,14.113,7.239,22.481,7.239c0.828,0,1.5,0.671,1.5,1.5S40.733,67.125,39.905,67.125z" /><path d="M46.883,61.917c-20.4,0-36.998-13.888-36.998-30.958S26.482,0,46.883,0s36.998,13.888,36.998,30.958c0,2.073-0.253,4.159-0.752,6.209l4.581,17.878c0.219,0.854-0.028,1.761-0.651,2.385c-0.622,0.625-1.531,0.875-2.383,0.659l-13.872-3.507C64.125,59.321,55.682,61.917,46.883,61.917z M46.883,5C29.239,5,14.885,16.645,14.885,30.958s14.354,25.958,31.998,25.958c8.149,0,15.919-2.499,21.877-7.035c0.605-0.462,1.387-0.623,2.128-0.435l10.935,2.765l-3.696-14.424c-0.106-0.418-0.104-0.856,0.009-1.272c0.495-1.834,0.746-3.704,0.746-5.557C78.881,16.645,64.526,5,46.883,5z" /><path fill="#010101" d="M52.479,19.963c-2.791,0-4.553,1.358-5.574,2.587c-1.023-1.229-2.785-2.587-5.576-2.587c-4.753,0-7.945,4.402-7.945,8.515c0,5.985,11.498,14.008,12.809,14.902c0.215,0.146,0.463,0.22,0.713,0.22c0.248,0,0.497-0.073,0.712-0.22c1.312-0.895,12.809-8.917,12.809-14.902C60.426,24.365,57.233,19.963,52.479,19.963z M46.904,40.796c-4.528-3.22-10.993-8.983-10.993-12.318c0-2.511,1.883-5.988,5.418-5.988c3.215,0,4.351,2.777,4.395,2.888c0.185,0.487,0.652,0.807,1.174,0.812c0.003,0,0.006,0,0.009,0c0.519,0,0.986-0.321,1.177-0.804c0.047-0.118,1.183-2.896,4.397-2.896c3.535,0,5.419,3.478,5.419,5.988C57.899,31.809,51.433,37.574,46.904,40.796z" /></g>
  ),
  notificationMessage: (
    <g><path d="M39.905,67.125c-8.758,0-17.148-2.629-23.716-7.417L1.868,63.33c-0.511,0.129-1.056-0.02-1.43-0.395c-0.374-0.375-0.522-0.919-0.391-1.432L4.691,43.38c-0.521-2.056-0.785-4.144-0.785-6.213c0-0.844,0.043-1.697,0.127-2.536c0.083-0.824,0.816-1.418,1.643-1.342c0.824,0.083,1.425,0.818,1.342,1.643c-0.075,0.739-0.112,1.491-0.112,2.235c0,1.936,0.263,3.893,0.782,5.818c0.067,0.25,0.069,0.513,0.005,0.763L3.58,59.803l12.567-3.177c0.444-0.112,0.913-0.016,1.276,0.261c6.13,4.668,14.114,7.239,22.482,7.239c0.829,0,1.5,0.671,1.5,1.5S40.734,67.125,39.905,67.125z" /><path d="M46.883,61.917c-20.401,0-36.998-13.888-36.998-30.958S26.482,0,46.883,0s36.999,13.888,36.999,30.958c0,2.071-0.253,4.156-0.753,6.209l4.582,17.879c0.219,0.854-0.029,1.761-0.651,2.385c-0.622,0.625-1.526,0.875-2.383,0.659l-13.872-3.507C64.125,59.321,55.683,61.917,46.883,61.917z M46.883,5C29.239,5,14.885,16.645,14.885,30.958s14.354,25.958,31.998,25.958c8.15,0,15.919-2.499,21.877-7.035c0.606-0.461,1.391-0.621,2.127-0.435l10.935,2.765l-3.696-14.424c-0.107-0.417-0.104-0.856,0.008-1.272c0.496-1.837,0.747-3.707,0.747-5.558C78.881,16.645,64.527,5,46.883,5z" /><path d="M63.788,28.667H31.622c-0.829,0-1.5-0.671-1.5-1.5s0.671-1.5,1.5-1.5h32.167c0.829,0,1.5,0.671,1.5,1.5S64.617,28.667,63.788,28.667z" /><path d="M58.902,37.667h-27.28c-0.829,0-1.5-0.671-1.5-1.5s0.671-1.5,1.5-1.5h27.28c0.829,0,1.5,0.671,1.5,1.5S59.73,37.667,58.902,37.667z" /></g>
  ),
};

const Icon = ({ style, type }) => {
  const otherStyling = style;
  return (
    <svg style={{ height: 25, width: 25, ...otherStyling }} viewBox="0 0 102 92">
      <g style={{ flex: 1 }}>
        {iconMapping[type]}
      </g>
    </svg>);
};

Icon.propTypes = {
  style: React.PropTypes.object,
  type: React.PropTypes.string,
};

export default Icon;

