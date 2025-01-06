import Popup from "./Popup";
const ProjectDetailsPopup = ({ open, close, project }) => {
  return (
    <Popup open={open} close={close}>
      <div className='popup_details'>
        <div className='top_image'>
          <img src={project.innerImg} alt='' />
          <div
            className='main'
            data-img-url={project.innerImg}
            style={{ backgroundImage: `url(${project.innerImg})` }}
          />
        </div>
        <div className='portfolio_main_title'>
          <h3>{project.title}</h3>
          <span>
            <a href='#' onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className='main_details'>
          <div className='textbox'>
            <p>{project.description}</p>
            {project.keyFeatures?.length > 0 && (
              <div style={{ marginBottom: "20px" }}>
                <h3>Key Features</h3>
                <ul className='roles-list'>
                  {project.keyFeatures?.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.keyResponsibilities?.length > 0 && (
              <div>
                <h3>Roles and Responsibilities</h3>
                <ul className='roles-list'>
                  {project.keyResponsibilities?.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
              </div>
            )}
            {
              project.links?.length > 0 && (
                <div className="links" style={{ marginTop: "20px" }}>
                  <h3>Links</h3>
                  <ul>
                    {project.links?.map((link, i) => (
                      <li key={i}>
                        <a href={link.url} target='_blank' rel='noreferrer'>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>)}
          </div>
          <div className='detailbox'>
            <ul>
              <li>
                <span className='first'>Client</span>
                <span>{project.title}</span>
              </li>
              <li>
                <span className='first'>Technology</span>
                {project.technologies?.map((tech, i) => (
                  <span className="tech" key={i}>
                    {tech}
                    {i < project.technologies.length - 1 && ", "}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className='additional_images'>
          <ul>
            <li>
              <div className='list_inner'>
                <div className='my_image'>
                  <img src={project.image1} alt='' />
                  <div
                    className='main'
                    data-img-url={project.image1}
                    style={{ backgroundImage: `url(${project.image1})` }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className='list_inner'>
                <div className='my_image'>
                  <img src={project.image2} alt='' />
                  <div
                    className='main'
                    data-img-url={project.image2}
                    style={{ backgroundImage: `url(${project.image2})` }}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className='list_inner'>
                <div className='my_image'>
                  <img src={project.image3} alt='' />
                  <div
                    className='main'
                    data-img-url={project.image3}
                    style={{ backgroundImage: `url(${project.image3})` }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default ProjectDetailsPopup;
