import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProjectList = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');

  const projectsData = [
    {
      id: 1,
      name: 'Kitchen',
      date: 'Mar 12, 2025',
      city: 'Plano',
      client: 'Donald',
      update: 'Re-considering the project. Needs Rev,..',
    },
    {
      id: 2,
      name: 'Master Bed Room',
      date: 'Apr 2, 2025',
      city: 'Allen',
      client: 'Donald',
      update: 'Conf Call Jan 6 @ 3pm. Kick Off Mtg..',
    },
    {
      id: 3,
      name: 'Kids Room',
      date: 'Mar 16, 2025',
      city: 'Frisco',
      client: 'Donald',
      update: 'Re-considering the project. Needs..',
    },
    {
      id: 4,
      name: 'Project 3',
      date: 'Mar 24, 2025',
      city: '-',
      client: 'Donald',
      update: 'Needs review before kickoff.',
    },
    {
      id: 5,
      name: 'Project 1',
      date: 'Mar 25, 2025',
      city: '-',
      client: 'Donald',
      update: 'Pending final approval.',
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetails = (id) => {
    history.push(`/project-details/${id}`);
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="inner-data back-box mb-3">
        <div className="row">
          <div className="col-md-9">
            <h3 className="mb-1">PROJECTS</h3>
          </div>
          <div className="col-md-3 text-right">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Project Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="back-box">
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-bordered table-hover table-responsive w-100 mb-0">
            <thead className="tablethead">
              <tr>
                <th>Project Name</th>
                <th>Meeting Date</th>
                <th>City</th>
                <th>Client Name</th>
                <th>Updates</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.date}</td>
                  <td>{project.city}</td>
                  <td>{project.client}</td>
                  <td>{project.update}</td>
                  <td>
                    <button
                      onClick={() => handleViewDetails(project.id)}
                      className="btn btn-sm btn-link font-weight-bold"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
              {filteredProjects.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
