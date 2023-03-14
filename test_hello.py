from approvaltests.approvals import verify


def test_simple():
    result = """
    Hello world!
    This is an approval test!
    """
    verify(result)
