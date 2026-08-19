import { Check, ChevronLeft, ChevronRight, Pen, Trash, TriangleAlert } from 'lucide-react';
import React, { useState } from 'react';

const studentsList = [
  { name: "Axis", ID: "LC00017004254", dep: "BIT", status: true },
  { name: "Pukku", ID: "LC00017004255", dep: "BIT", status: false },
  { name: "Fulla Singh", ID: "LC00017004256", dep: "BIT", status: false },
  { name: "Aizen Sousuke", ID: "LC00017004257", dep: "BIT", status: true },
  { name: "Sarah Jenkins", ID: "LC00017004258", dep: "CS", status: true },
  { name: "Marcus Chen", ID: "LC00017004259", dep: "Biology", status: false },
  { name: "Elena Rodriguez", ID: "LC00017004260", dep: "Fine Arts", status: true },
  { name: "David Thompson", ID: "LC00017004261", dep: "Engineering", status: true },
];

export default function Students() {
  const [studentsData, setStudentData] = useState(studentsList);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate index ranges
  const indexOfLastStudent = currentPage * itemsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
  
  // Slice the student array for the current page
  const currentStudents = studentsData.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(studentsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="p-6">
      <div>
        <h2 className="font-semibold text-2xl">Student Directory</h2>
        <p className="w-2/3 opacity-40 text-xs">Manage and view enrolled students across all departments.</p>
      </div>

      <div className="mt-8 border rounded-lg overflow-hidden bg-white shadow-sm">
        <table className="w-full">
          <thead className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-5 px-4 py-3 bg-gray-100 text-gray-600 text-xs font-semibold">
            <tr>STUDENT</tr>
            <tr>STUDENT ID</tr>
            <tr>DEPARTMENT</tr>
            <tr>STATUS</tr>
            <tr>ACTIONS</tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentStudents.map(({ name, ID, dep, status }, index) => (
              <tr key={index} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-5 px-4 py-3 hover:bg-gray-50 items-center">
                <td className="font-semibold">{name}</td>
                <td className="text-xs text-gray-500">{ID}</td>
                <td className="font-medium text-sm">{dep}</td>
                <td className="text-xs">
                  {status ? (
                    <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1 w-max font-medium">
                      <Check className="w-3.5 h-3.5" /> Enrolled
                    </span>
                  ) : (
                    <span className="text-red-600 bg-red-50 px-2 py-1 rounded-full flex items-center gap-1 w-max font-medium">
                      <TriangleAlert className="w-3.5 h-3.5" /> Not enrolled
                    </span>
                  )}
                </td>
                <td className="flex items-center gap-3">
                  <Pen className="w-4 h-4 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors" />
                  <Trash className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-600 transition-colors" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Pagination Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-t bg-white text-xs text-gray-600">
          <div>
            Showing <span className="font-semibold">{studentsData.length === 0 ? 0 : indexOfFirstStudent + 1}</span> to{' '}
            <span className="font-semibold">{Math.min(indexOfLastStudent, studentsData.length)}</span> of{' '}
            <span className="font-semibold">{studentsData.length}</span> students
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 border rounded hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 border rounded font-medium ${
                  currentPage === page ? 'bg-blue-900 text-white border-blue-900' : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className="p-1 border rounded hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}